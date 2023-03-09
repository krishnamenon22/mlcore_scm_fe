/* eslint-disable security/detect-object-injection */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useMemo } from "react";
import moment from "moment";
import _ from "lodash";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { InboundObject } from "pages/dashboard/types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { TripsTableProps } from "./types";

function TripsTable({ stages, trips, tripStages }: TripsTableProps) {

  const staticDataColumns: MRT_ColumnDef<InboundObject>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: 'ID',
      size: 40,
    },
    {
      id: 'trip_id',
      accessorKey: 'trip_id',
      header: 'Trip ID',
      size: 100,
    },
    {
      id: 'load_id',
      accessorKey: 'load_id',
      header: 'Load ID',
      size: 100,
    },
    {
      id: 'source',
      accessorKey: 'source',
      header: 'Source',
    },
    {
      id: 'destination',
      accessorKey: 'destination',
      header: 'Destination',
    },
    {
      id: 'planned_start',
      accessorKey: 'planned_start',
      header: 'PD-Date',
      size: 80,
      Cell: ({ row }) => (
        <div className="">
          {moment(row.original.planned_start).format("DD MMM, YY")}
        </div>
      )
    },
    {
      id: 'status',
      accessorKey: undefined,
      header: 'Status',
      size: 80,
      Cell: ({ row }) => {
        const status = tripStages[row.original.id]?.status;
        return (
          <div className={`text-center ${status === "Delayed" ? "bg-red-300" : ""}`}>
            {status}
          </div>
        )
      }
    },
  ];

  const stageColumns: MRT_ColumnDef<InboundObject>[] = _.map(stages, (stage, index) => ({
    id: stage.name,
    accessorKey: undefined,
    header: stage.name,
    size: 80,
    muiTableBodyCellProps: {
      sx: {
        paddingLeft: index === 0 ? "10px" : "0px",
        paddingRight: index === stages.length - 1 ? "10px" : "0px",
        fontSize: "0.75rem",
      }
    },
    Cell: ({ row }) => {
      const tripStage = tripStages[row.original.id];
      const value = tripStage?.stage_values[index];
      const indexOfNS = tripStage?.stage_values.indexOf(0);
      const stagesLen = tripStage?.stage_values.length;

      return (
        <div className="flex items-center w-[100%] relative">
          <div className={
            `border w-[50%] ${index === 0 ? "border-transparent" : "border-gray-400"}
            ${indexOfNS !== -1 && indexOfNS < index ? "border-dashed" : ""}`
          } />
          <div className={
            `w-[10px] h-[10px] rounded-[50%] border border-gray-300 
            ${value === 1 ? "bg-green-500" : value === 2 ? "bg-yellow-500" : value === 3 ? "bg-red-500" : "bg-white"}
            `
          } />
          <div className={
            `border w-[50%] ${index === stagesLen - 1 ? "border-transparent" : "border-gray-400"} 
            ${indexOfNS !== -1 && indexOfNS <= index ? "border-dashed" : ""}`
          } />
        </div>
      )
    }
  }));

  const actionColumns: MRT_ColumnDef<InboundObject>[] = [
    {
      id: 'subscribed',
      accessorKey: 'is_subscribed',
      header: 'Action',
      size: 50,
      Cell: ({ row }) => (
        <div className="flex justify-center cursor-pointer items-center">
          {
            row.original.is_subscribed ? (
              <StarIcon sx={{ color: "#003668" }} />
            ) : (
              <StarBorderIcon sx={{ color: "#003668" }} />
            )
          }
        </div>
      )
    }
  ];

  const columns = useMemo<MRT_ColumnDef<InboundObject>[]>(
    () => stageColumns.length > 0 ? [
      ...staticDataColumns,
      ...stageColumns,
      ...actionColumns,
    ] : [],
    [staticDataColumns, stageColumns, actionColumns],
  );

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={trips}
        initialState={{ density: 'compact' }}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableHiding={false}
        enableGlobalFilter={false}
        enableSorting={false}
        enableColumnActions={false}
        renderTopToolbar={() => <div className="p-1 bg-[#D8E6F3]" />}
        muiTableHeadCellProps={{
          sx: () => ({
            fontSize: "13px",
            color: "black",
            backgroundColor: "#D8E6F3",
          })
        }}
        muiTableBodyCellProps={{
          sx: () => ({
            fontSize: "0.75rem",
          })
        }}
      />
    </div>
  );
}

export default TripsTable;