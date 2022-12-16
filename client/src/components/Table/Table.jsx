import classes from "./Table.module.css";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export const Table = ({ columns, rows, cellWidth }) => {
    return (
        <div className={classes.table}>
            <TableHeader columnsNames={columns} cellWidth={cellWidth}/>
            {rows?.map((row, index) => (
                <TableRow key={index} cells={row} cellWidth={cellWidth} />
            ))}
        </div>
    );
};
