interface RadioButtonProps{
    id: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    value: string,
    label: string
}
export const RadioButton:React.FC<RadioButtonProps> =({id, onChange, value, label}) =>{
    return (
        <>
        <input type="radio" id={id} name="powerstat" onChange={onChange} value={value} />
        <label htmlFor={id}>{label}</label><br/>
        </>
    )
}