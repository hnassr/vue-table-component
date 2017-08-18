export default {
    functional: true,

    props: ['column', 'row'],

    render(createElement, { props }) {
        const data = {};

        if (props.column.cellClass) {
            data.class = props.column.cellClass;
        }

        if (props.column.template) {
            return createElement('td', data, props.column.template(props.row.data));
        }

        data.domProps = {};
        data.domProps.innerHTML = props.column.formatter(props.row.getValue(props.column.show));

        return createElement('td', data);
    },
};
