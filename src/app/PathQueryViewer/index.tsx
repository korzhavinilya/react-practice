import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

const PathQueryViewer = () => {
  const query = useQuery();
  return <div>query: {query.get("foo")}</div>;
};

export default PathQueryViewer;
