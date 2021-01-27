import MyWonderfulComponent from './MyWonderfulComponent';

export default function Page({ id, options, count, color, data, text }) {
    return (
        <MyWonderfulComponent id={id} options={options} count={count}>
            <p>I'm text from a component</p>
            <p>{text}</p>
        </MyWonderfulComponent>
    )
};