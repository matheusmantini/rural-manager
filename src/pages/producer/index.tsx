import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useMemo, useState } from "react";
import CustomButton from "../../components/atoms/button";
import CustomLink from "../../components/atoms/link";
import { iProducer } from "../../types";
import { addProducer } from "../../redux/features/Producer";
import ModalAddProducer from "../../components/organisms/modalAddProducer";
import { toast } from "react-toastify";
import {
  PagesInfoDesk,
  PagesInfoMob,
  PaginationContainer,
  PaginationWrapper,
  ProducerContainer,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableWrapper,
} from "./producer.style";

const ProducersPage = () => {
  const dispatch = useDispatch();
  const producers = useSelector((state: RootState) => state.producers.value);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProperties = useMemo(() => {
    if (!producers) return [];
    const properties = producers.flatMap((producer: iProducer) => {
      if (producer.properties.length > 0) {
        return producer.properties.map((property) => ({
          id: property.id,
          producerId: producer.id,
          producerName: producer.name,
          cpfCnpj: producer.cpfOrCnpj,
          name: property.name,
          city: property.city,
          state: property.state,
          totalArea: property.totalArea,
          agriculturalArea: property.agriculturalArea,
          vegetationArea: property.vegetationArea,
        }));
      } else {
        return [
          {
            id: `${producer.id}-empty`,
            producerId: producer.id,
            producerName: producer.name,
            cpfCnpj: producer.cpfOrCnpj,
            name: "-",
            city: "-",
            state: "-",
            totalArea: "-",
            agriculturalArea: "-",
            vegetationArea: "-",
          },
        ];
      }
    });

    return properties.reverse();
  }, [producers]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allProperties]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(allProperties.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    return allProperties.slice(indexOfFirstItem, indexOfLastItem);
  }, [allProperties, currentPage, itemsPerPage]);

  return (
    <ProducerContainer>
      <CustomButton variant="success" onClick={() => setIsModalOpen(true)}>
        Adicionar novo produtor
      </CustomButton>

      {isModalOpen && (
        <ModalAddProducer
          onClose={() => setIsModalOpen(false)}
          onSubmit={(values: iProducer) => {
            dispatch(addProducer(values));
            toast.success("Produtor adicionado com sucesso!");
            setIsModalOpen(false);
          }}
        />
      )}

      {currentItems.length > 0 ? (
        <>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Produtor</TableHeader>
                  <TableHeader>CPF / CNPJ</TableHeader>
                  <TableHeader>Propriedade</TableHeader>
                  <TableHeader>Cidade</TableHeader>
                  <TableHeader>Estado</TableHeader>
                  <TableHeader>Área Total (ha)</TableHeader>
                  <TableHeader>Área Agrícola (ha)</TableHeader>
                  <TableHeader>Área de Vegetação (ha)</TableHeader>
                  <TableHeader>Ação</TableHeader>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((property, index) => (
                  <TableRow key={index + property.name}>
                    <TableCell>{property.producerName}</TableCell>
                    <TableCell>{property.cpfCnpj}</TableCell>
                    <TableCell>{property.name}</TableCell>
                    <TableCell>{property.city}</TableCell>
                    <TableCell>{property.state}</TableCell>
                    <TableCell>{property.totalArea}</TableCell>
                    <TableCell>{property.agriculturalArea}</TableCell>
                    <TableCell>{property.vegetationArea}</TableCell>
                    <TableCell>
                      <CustomLink
                        to={`/produtor/${property.producerId}`}
                        variant="primary"
                      >
                        Ver detalhes
                      </CustomLink>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>

          <PaginationContainer>
            <PagesInfoMob>{`Página ${currentPage} de ${totalPages}`}</PagesInfoMob>
            <PaginationWrapper>
              <CustomButton
                variant="secondary"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Anterior
              </CustomButton>
              <PagesInfoDesk>{`Página ${currentPage} de ${totalPages}`}</PagesInfoDesk>
              <CustomButton
                variant="secondary"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Próxima
              </CustomButton>
            </PaginationWrapper>
          </PaginationContainer>
        </>
      ) : (
        <p>Nenhum produtor cadastrado.</p>
      )}
    </ProducerContainer>
  );
};

export default ProducersPage;
