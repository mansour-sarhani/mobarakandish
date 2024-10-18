'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import PageBreadcrumb from '@/components/modules/common/PageBreadcrumb';
import { Container } from '@mui/material';

const headers = [
    {
        id: 'naab',
        label: 'NAAB',
    },
    {
        id: 'regNo',
        label: 'Reg No',
    },
    {
        id: 'breed',
        label: 'Breed',
    },
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'lnm',
        label: 'LNM',
    },
    {
        id: 'lfm',
        label: 'LFM',
    },
    {
        id: 'milk',
        label: 'MILK',
    },
    {
        id: 'icc',
        label: 'ICC',
    },
    {
        id: 'fat',
        label: 'FAT',
    },
    {
        id: 'protein',
        label: 'PROTEIN',
    },
    {
        id: 'sce',
        label: 'SCE',
    },
    {
        id: 'pl',
        label: 'PL',
    },
    {
        id: 'dpr',
        label: 'DPR',
    },
    {
        id: 'ptat',
        label: 'PTAT',
    },
    {
        id: 'udc',
        label: 'UDC',
    },
    {
        id: 'flc',
        label: 'FLC',
    },
    {
        id: 'fs',
        label: 'FS',
    },
    {
        id: 'fi',
        label: 'FI',
    },
    {
        id: 'tpi',
        label: 'TPI',
    },
    {
        id: 'sire',
        label: 'SIRE',
    },
    {
        id: 'mgs',
        label: 'MGS',
    },
    {
        id: 'price',
        label: 'قیمت',
    },
].filter((header) => header.id !== 'price');

const data = [
    {
        id: 1,
        naab: 'Naab 1',
        regNo: '585485',
        breed: 'Breed one',
        name: 'First Sperm',
        lnm: '1.1',
        lfm: '1.2',
        milk: '1.3',
        icc: '1.4',
        fat: '1.5',
        protein: '1.6',
        sce: '1.7',
        pl: '1.8',
        dpr: '1.9',
        ptat: '1.10',
        udc: '1.11',
        flc: '1.12',
        fs: '1.13',
        fi: '1.14',
        tpi: '1.15',
        sire: '1.16',
        mgs: '1.17',
        price: '450000',
    },

    {
        id: 2,
        naab: 'Naab 2',
        regNo: '367964',
        breed: 'Breed two',
        name: 'Second Sperm',
        lnm: '2.1',
        lfm: '2.2',
        milk: '2.3',
        icc: '2.4',
        fat: '2.5',
        protein: '2.6',
        sce: '2.7',
        pl: '2.8',
        dpr: '2.9',
        ptat: '2.10',
        udc: '2.11',
        flc: '2.12',
        fs: '2.13',
        fi: '2.14',
        tpi: '2.15',
        sire: '2.16',
        mgs: '2.17',
        price: '970000',
    },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#00a594',
        color: theme.palette.common.white,
        border: '1px solid #ccc',
        padding: '3px 5px',
    },
    [`&.${tableCellClasses.body}`]: {
        border: '1px solid #ccc',
        padding: '3px 5px',
    },
}));

export default function MilkCowSpermPage() {
    const [checkedHeaders, setCheckedHeaders] = useState(
        headers.map((h) => h.id)
    );

    const handleChange = (event) => {
        const headerId = event.target.name;
        if (headerId === 'price') return;
        if (event.target.checked) {
            setCheckedHeaders((prevHeaders) =>
                [...prevHeaders, headerId].sort(
                    (a, b) =>
                        headers.findIndex((h) => h.id === a) -
                        headers.findIndex((h) => h.id === b)
                )
            );
        } else {
            setCheckedHeaders((prevHeaders) =>
                prevHeaders.filter((h) => h !== headerId)
            );
        }
    };

    return (
        <div className="inner-page-wrapper">
            <PageBreadcrumb
                title={'لیست اسپرم های گاو شیری'}
                parent={'گاو شیری'}
            />

            <div className="inner-page-content">
                <Container>
                    <div sx={{ maxWidth: '100%', marginBottom: '20px' }}>
                        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                            برای اطلاعات بیشتر شاخص های مد نظر خود را انتخاب
                            کنید :
                        </Typography>
                        <div className="beef-sperm-grid">
                            {headers.map((header) => (
                                <FormControlLabel
                                    key={header.id}
                                    control={
                                        <Checkbox
                                            checked={checkedHeaders.includes(
                                                header.id
                                            )}
                                            onChange={handleChange}
                                            name={header.id}
                                            sx={{ padding: '5px' }}
                                        />
                                    }
                                    label={header.label}
                                    sx={{ marginRight: 0 }}
                                />
                            ))}
                        </div>
                    </div>
                    <Paper sx={{ maxWidth: '100%' }}>
                        <TableContainer>
                            <Table
                                sx={{ width: '100%' }}
                                aria-label="Beef Cow Sperm"
                                size="small"
                            >
                                <TableHead>
                                    <TableRow>
                                        {checkedHeaders.map(
                                            (headerId, index) => (
                                                <StyledTableCell
                                                    key={index + headers.length}
                                                    align="center"
                                                >
                                                    {
                                                        headers.find(
                                                            (header) =>
                                                                header.id ===
                                                                headerId
                                                        ).label
                                                    }
                                                </StyledTableCell>
                                            )
                                        )}
                                        <StyledTableCell align="center">
                                            قیمت
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow
                                            hover
                                            key={row.id}
                                            tabIndex={-1}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {checkedHeaders.map(
                                                (headerId, index) => (
                                                    <StyledTableCell
                                                        key={
                                                            index +
                                                            headers.length
                                                        }
                                                        align="center"
                                                    >
                                                        {row[headerId]}
                                                    </StyledTableCell>
                                                )
                                            )}
                                            <StyledTableCell align="center">
                                                {row.price}
                                            </StyledTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </div>
        </div>
    );
}
