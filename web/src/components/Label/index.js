export default function Label({children}){
    return(
        <label
        style={{ color: 'grey', fontSize: '14px', fontWeight: '700' }}
        >{children}</label>
    )
}