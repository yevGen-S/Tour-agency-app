import classes from "./Table.module.css";

const Sub = ({ text }) => {
    return <sub style={{fontSize: "12px", alignSelf: "flex-end"}}>{text}</sub>;
};

const ColumnName = ({ name, width }) => {
    return (
        <div className={classes.table__cell} style={{width: width}}>
            {name.includes("_") ? (
                <>
                    {name.substring(0, name.indexOf("_"))}
                    <Sub text={name.substring(name.indexOf("_") + 1)} />
                </>
            ) : (
                name
            )}
        </div>
    );
};

export const TableHeader = ({ columnsNames, cellWidth }) => {
    return (
        <div className={classes.table__row}>
            {columnsNames.map((name, index) => (
                <ColumnName key={index} name={name} width={cellWidth} />
            ))}
        </div>
    );
};
