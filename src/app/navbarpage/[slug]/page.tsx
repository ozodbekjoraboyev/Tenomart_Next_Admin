"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavbarPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  console.log(id);

  return <div>
    <h1>Navbar
    </h1>             
  </div>;
}

export default NavbarPage;
