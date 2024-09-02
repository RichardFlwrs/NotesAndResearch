export class Scheme {
    constructor(name, columns) {
        this.name = name
        this.columns = columns
    }

    getFileName() { return `${this.name}Columnas.DAO.tsx` }
    getInterfaceName() { return `I${this.name}` }

    getRequiredLib() {
        return `
import { fakerES_MX as faker } from '@faker-js/faker'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { getOptionsColumn, ITableColumn } from 'components/DraggableTable/functions/DraggableTableFunctions'
`
    }

    getColumnScheme() {
        const IScheme = this.getInterfaceName();

        return `
export interface ${IScheme} {${this.columns.map(this.__buildInterface)}
}

const additionalColumns: ITableColumn[] = []

export function getColumns${this.name}() {
    const columns = useMemo<ColumnDef<${IScheme}>[]>(
        () => [
			${this.columns.map(this.__buildColumn)}
			// getOptionsColumn(additionalColumns)
        ],
        []
    )

    return columns
}
      `
    }

    /** * * * * * * * * * * * * * * * *
     * 
     * 			PRIVATE METHODS
     */

    /**
     * @private
     */
    __buildColumn(column) {
        const ID = column[0]
        const HEADER = column[1]

        return `{
				accessorFn: row => row.${ID},
                header: () => '${HEADER}',
                id: '${ID}',
                size: 100,
			}`
    }

    /**
     * @private
     */
    __buildInterface(column) {
        const ID = column[0]
        let type = 'string'

        if (ID === 'id') type = 'number | string'

        return `
	${ID}: ${type}`
    }
}
