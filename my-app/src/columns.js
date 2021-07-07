import * as React from 'react';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";


const columns = [
    {
        field: 'id',
        headerName: 'Name',
        width: 180,
        renderCell: (params) => (
            <strong>
                <Link
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    href={params.getValue(params.id, 'href') || ''}
                    target={'_blank'}
                >
                    {params.getValue(params.id, 'id') || ''}
                </Link>
            </strong>
        ),
    },
    {
        field: 'size_hours',
        headerName: 'Size (Hours)',
        width: 140,
        align: 'right'
    },
    {
        field: 'size_storage',
        headerName: 'Size (Storage)',
        width: 140,
        align: 'right'
    },
    {
        field: 'frames',
        headerName: 'Frames',
        width: 120,
        align: 'right'
    },
    {
        field: 'numberOfScenes',
        headerName: '# of Scenes',
        width: 140,
        align: 'right'
    },
    {
        field: 'samplingRate',
        headerName: 'Sampling Rate',
        width: 150,
        hide: true,
        menu: false,
        align: 'right'
    },
    {
        field: 'lengthOfScenes',
        headerName: 'Length of Scenes',
        width: 150,
        align: 'right'
    },
    {
        field: 'sensors',
        headerName: 'Sensors',
        type: 'number',
        width: 210,
    },
    {
        field: 'benchmark',
        headerName: 'Benchmark',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
        hide: true
    },
    {
        field: 'dataFormat',
        headerName: 'Data Format',
        width: 150,
        hide: true
    },
    {
        field: 'tooling',
        headerName: 'Tooling',
        width: 150,
        hide: true
    },
    {
        field: 'annotations',
        headerName: 'Annotations',
        width: 150,
    },
    {
        field: 'licensing',
        headerName: 'Licensing',
        width: 150,
        resizable: true
    },
    {
        field: 'relatedDatasets',
        headerName: 'Related Datasets',
        width: 150,
        hide: true
    },
    {
        field: 'publishDate',
        headerName: 'Publish Date',
        width: 150,
        hide: true
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 150,
        hide: true,
    },
];

export { columns };