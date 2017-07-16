(function (name, definition) {
    if (typeof define === 'function') {
        define(name, definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
}('Select', function () {
    'use strict';

    class Component {

        constructor(props) {
            this.props = props || {};
            this.state = {};
            this.refs = {};
            this.$disposables = {
                mounted: [],
                updated: []
            };
        }

        $defer(stage, dispose) {
            this.$disposables[stage].push(dispose);
        }

        $dispose(stage) {
            this.$disposables[stage].reverse().forEach(dispose => dispose());
            this.$disposables[stage].length = 0;
        }

        componentMount(ctx) {
            this.$el && this.componentUnmount();
            this.componentWillMount();
            this.$el = (ctx && ctx.el) || document.createElement('div');
            this.$defer('mounted', () => {
                this.$el.innerHTML = '';
                this.$el = null;
            });
            this.forceUpdate();
            this.componentDidMount();
            return this;
        }

        componentWillMount() {}

        componentDidMount() {}

        componentUnmount() {
            this.componentWillUnmount();
            this.$dispose('mounted');
            this.componentDidUnmount();
            return this;
        }

        componentWillUnmount() {}

        componentDidUnmount() {}

        setState(updater, callback) {
            let prevState = this.state;
            let nextState = typeof updater == 'function' ? updater(prevState, this.props) : updater;
            this.state = Object.assign(prevState, nextState);
            if (this.shouldComponentUpdate(prevState, nextState)) {
                this.forceUpdate();
            }
            callback && callback.call(this);
            return this;
        }

        forceUpdate() {
            this.componentUpdate(this.props, this.state);
            return this;
        }

        shouldComponentUpdate(prevState, nextState) {
            return prevState !== nextState;
        }

        componentUpdate(props, state) {
            if (this.$el) {
                this.componentWillUpdate(props, state);
                this.$dispose('updated');
                this.$el.innerHTML = this.render(props, state);
                this.refs = Array.from(this.$el.querySelectorAll('[ref]')).reduce(function (refs, node) {
                    return (refs[node.getAttribute('ref')] = node), refs;
                }, {});
                this.componentDidUpdate(props, state);
            }
        }

        componentWillUpdate(props, state) {}

        render(props, state) {
            return '';
        }

        componentDidUpdate(props, state) {}
    }

    class Select extends Component {
        constructor(props) {
            super(props);
            const selected = this.props.selected;
            this.state = {
                placeholder: selected || this.props.placeholder || '',
                selected: selected || null,
                expanded: false
            };
            this.onDocumentClick = this.onDocumentClick.bind(this);
            this.onToolboxClick = this.onToolboxClick.bind(this);
            this.dropdown = new Dropdown(Object.assign({}, this.props, {
                onSelected: selected => {
                    this.props.onSelected && this.props.onSelected(selected);
                    this.setState(prevState => ({
                        placeholder: selected.text || selected.value,
                        selected: selected,
                        expanded: false
                    }));
                }
            }));
        }

        onDocumentClick(event) {
            if (!event.path.some(e => e === this.$el)) {
                 this.setState(prevState => ({
                    expanded: false
                 }));
            }
        }

        onToolboxClick(event) {
            this.setState(prevState => ({
                expanded: !prevState.expanded
            }), () => {
                if (this.props.search && this.state.expanded) {
                    this.dropdown.refs.query.focus();
                }
            });
        }

        render(props, state) {
            return `<div class="select__box">
                    <div ref="toolbox" class="select__toolbox">
                        <i class="select__arrow" aria-hidden="true"></i>
                        <div class="select__label">${state.placeholder}</div>
                    </div>
                    <div ref="dropdown" class="select__dropdown ${ state.expanded ? "select__dropdown--show" : "" }"></div>
                </div>`;
        }

        componentDidMount() {
            document.body.addEventListener('click', this.onDocumentClick);
            this.$defer('mounted', () => document.body.removeEventListener('click', this.onDocumentClick));
        }

        componentDidUnmount() {
            this.dropdown.componentUnmount();
        }

        componentDidUpdate() {
            const $toolbox = this.refs.toolbox;
            $toolbox.addEventListener('click', this.onToolboxClick);
            this.$defer('updated', () => $toolbox.removeEventListener('click', this.onToolboxClick));
            this.dropdown.componentMount({
                el: this.refs.dropdown
            });
        }
    }

    class Dropdown extends Component {
        constructor(props) {
            super(props);
            this.state = {
                query: "",
                dataset: this.props.dataset || [],
                selected: this.props.selected
            };
            this.onQueryChanged = this.onQueryChanged.bind(this);
            this.onItemClicked = this.onItemClicked.bind(this);
        }

        onQueryChanged(event) {
            const query = event.target.value;
            const match = new RegExp(query, 'gi');
            const dataset = (this.props.dataset || []).filter(item => match.test(item.text || item.value || ''));
            this.setState(prevState => ({
                query: query,
                dataset: dataset
            }));
        }

        onItemClicked(event) {
            const index = event.target.closest('li').dataset.index;
            const selected = this.state.dataset[index];
            this.props.onSelected && this.props.onSelected(selected);
            this.setState(prevState => ({
                selected: selected
            }));
        }

        render(props, state) {
            if (state.dataset.length === 0) {
                return `<input ref="query" type="text" value="${state.query}" class="select__query">
                    <span class="select__query_noresult">${props.noResults || ''}</span>`;
            }
            let search = '';
            if (props.search) {
                search = `<input ref="query" type="text" value="${state.query}" class="select__query">`;
            }
            return `${search}
                    <ul ref="list" class="select__list">
                        ${ state.dataset.map(function(item, index){
                                return `
                                    <li class="select__item ${(item === state.selected || item.value === state.selected) ? "select__item--selected" : ""}" data-index="${index}" data-value="${item.value || item.text}">
                                        <span class="select__item_text">${item.text || item.value}</span>
                                    </li>`;
                    }).join('') }
                    </ul>`;
        }

        componentDidUpdate() {
            if (this.props.search) {
                const $query = this.refs.query;
                $query.addEventListener('change', this.onQueryChanged);
                this.$defer('updated', () => $query.removeEventListener('change', this.onQueryChanged));
            }
            const $list = this.refs.list;
            if ($list) {
                $list.addEventListener('click', this.onItemClicked);
                this.$defer('updated', () => $list.removeEventListener('click', this.onItemClicked));
            }
        }
    }

    return Select;
}));

const source = [
    { value: 'Price ASC' },
    { value: 'Price DESC' },  
    { value: 'Name ASC' },
    { value: 'Name DESC' }
];

const source2 = [
    { value: '12' }, 
    { value: '15' }, 
    { value: '18' },
    { value: '21' }
];

const select1 = new Select({
      placeholder: 'Name ASC',
      dataset: source,
      noResults: 'No results found',
      onSelected: function (item) {
            if (item.value.indexOf('Price') !== -1) {
                var classname = document.getElementsByClassName('product');
                var divs = [];
                for (var i = 0; i < classname.length; ++i) {
                    divs.push(classname[i]);
                }
                divs.sort(function(a, b) {
                    if (item.value.indexOf('ASC') !== -1) return parseInt(a.dataset.price) - parseInt(b.dataset.price);
                    else return parseInt(b.dataset.price) - parseInt(a.dataset.price);
                });

                document.getElementById('productGrid').innerHTML = null;

                divs.forEach(function(el) {
                    document.getElementById('productGrid').appendChild(el);
                });
            } else {
                var classname = document.getElementsByClassName('product');
                var divs = [];
                for (var i = 0; i < classname.length; ++i) {
                    divs.push(classname[i]);
                }
                divs.sort(function(a, b) {
                    if (item.value.indexOf('ASC') !== -1) return a.getAttribute("aria-label").localeCompare(b.getAttribute("aria-label"));
                    else return b.getAttribute("aria-label").localeCompare(a.getAttribute("aria-label"));
                });

                document.getElementById('productGrid').innerHTML = null;

                divs.forEach(function(el) {
                    document.getElementById('productGrid').appendChild(el);
                });
            }
        }
        }).componentMount({
      el: document.getElementById('positionDropdown')
});

const select2 = new Select({
      placeholder: '15',
      dataset: source2,
      noResults: 'No results found',
      onSelected: function (item) {
        var ele = document.getElementById('productGrid');
            switch (item.value) {
                case '12': ele.className = 'prodLimit12'; break;
                case '15': ele.className = 'prodLimit15'; break;
                case '18': ele.className = 'prodLimit18'; break;
                case '21': ele.className = 'prodLimit21'; break;
            }
        }
        }).componentMount({
      el: document.getElementById('viewDropdown')
});
