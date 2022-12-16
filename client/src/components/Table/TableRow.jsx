import classes from "./Table.module.css";

export const TableRow = ({ cells, cellWidth }) => {
    return (
        <div className={classes.table__row}>
            {cells.map((cell, index) => (
                <div className={classes.table__cell} style={{width: cellWidth}} key={index}>
                    {cell}
                </div>
            ))}
        </div>
    );
};
