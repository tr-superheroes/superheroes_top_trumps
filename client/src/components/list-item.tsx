export interface ListItemProps{
    value: string
}
export const ListItem:React.FC<ListItemProps> =({value}) =>{
    return (
        <li>{value}</li>
    )
}