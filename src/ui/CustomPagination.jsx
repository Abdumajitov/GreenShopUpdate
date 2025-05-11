// ui/CustomPagination.jsx
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomPagination({ count, page, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className="mt-10 items-end">
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        color="success"
      />
    </Stack>
  );
}
