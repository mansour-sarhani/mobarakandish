'use client';

import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import PageBreadcrumb from '@/components/modules/common/PageBreadcrumb';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
import getAllDairyCowSpermsList from '@/functions/getAllDairyCowSpermsList';
import { faIR } from '@mui/x-data-grid/locales';
import Loading from '../modules/common/Loading';

const headers = [
    {
        id: 'naaB_CODE',
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
        id: 'pro',
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
        label: 'قیمت (تومان)',
    },
];

export default function MilkCowSpermPage() {
    const [serverData, setServerData] = useState();

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const customFaIRLocaleText = {
        ...faIR.components.MuiDataGrid.defaultProps.localeText,
        filterOperatorDoesNotContain: 'شامل نمی‌شود',
        filterOperatorDoesNotEqual: 'مساوی نیست',
    };

    const columns = headers.map((header) => ({
        field: header.id,
        headerName: header.label,
        minWidth: 85,
        align: 'right',
        headerAlign: 'left',
        width: window.innerWidth < 480 ? 120 : 85,
    }));

    const rows =
        (serverData &&
            serverData.map((item) => ({
                id: item.id,
                naaB_CODE: item.naaB_CODE,
                regNo: item.regNo,
                breed: item.breed,
                name: item.name,
                lnm: item.lnm,
                lfm: item.lfm,
                milk: item.milk,
                icc: item.icc,
                fat: item.fat,
                pro: item.pro,
                sce: item.sce,
                pl: item.pl,
                dpr: item.dpr,
                ptat: item.ptat,
                udc: item.udc,
                flc: item.flc,
                fs: item.fs,
                fi: item.fi,
                tpi: item.tpi,
                sire: item.sire,
                mgs: item.mgs,
                price: item.price,
            }))) ||
        [];

    useEffect(() => {
        async function fetchData() {
            await getAllDairyCowSpermsList(
                dispatch,
                enqueueSnackbar,
                setServerData
            );
        }
        fetchData();
    }, [dispatch, enqueueSnackbar]);

    return (
        <div className="inner-page-wrapper">
            <PageBreadcrumb
                title={'لیست اسپرم های گاو شیری'}
                parent={'گاو شیری'}
            />

            <div className="inner-page-content full-page">
                <div className="sperm-page-container">
                    <div className="sperm-page-table">
                        <Paper sx={{ maxWidth: '100%' }}>
                            {serverData ? (
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 10,
                                            },
                                        },
                                    }}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    pageSizeOptions={[10]}
                                    localeText={customFaIRLocaleText}
                                    autosizeOptions={{
                                        includeOutliers: true,
                                        includeHeaders: true,
                                    }}
                                    disableRowSelectionOnClick
                                />
                            ) : (
                                <Loading isLoading={true} />
                            )}
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
}
