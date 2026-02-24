import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { AdminTitle } from "../components/AdminTitle";
import { Link } from "react-router";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const AdminProductsPage = () => {
  return (
    <>
    <div className="flex justify-between items-center">

      <AdminTitle
        title="Productos"
        subtitle="Aqui puedes ver y administrar tus productos"
      />

      <Link to="admin/product/new">
        <Button>
          <PlusIcon />
          Nuevo Producto
        </Button>
      </Link>
    </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>inventario</TableHead>
            <TableHead>Talles</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="https://placehold.com/250*250"
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell className="font-medium">producto 1</TableCell>
            <TableCell>$ 1000</TableCell>
            <TableCell>Categoria 1</TableCell>
            <TableCell>Stock 100</TableCell>
            <TableCell>XS, S, L</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/productos/t-shirt-teslo`}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={10} />
    </>
  );
};
