import React from 'react'
import styled from 'styled-components'
import Container from '../cors/Container'
import { FormTrash, Edit } from 'grommet-icons';

const Wrapper = styled(Container)`
  padding: 2rem;

`
const TableWrapper = styled.table`
  border: 1px solid black;
  tr td  {
    border: 1px solid black;
    padding: 1rem;
  }
  th {
    color: #0096c7;
  }
`

const Table = (props) => {

  const { data, editMode, deleteMode, handleDelete, handleEdit } = props;

  const getKeys = () => {
    return Object.keys(data[0]);
  }
  const getHeader = () => {
    const keys = getKeys();
    return keys.map((key, i) => {
      return <th key={i}>{key.toUpperCase()}</th>
    })
  }
  const RenderRow = (props) => {
    return (
      <>
        {props.keys.map((key, i) => {
          if (deleteMode && key === 'id') return <td key={i}><FormTrash onClick={() => handleDelete(props.data[key])} size='medium' color='#FB3640' /></td>
          if (editMode && key === 'id') return <td key={i}><Edit onClick={() => handleEdit(props.data)} size='medium' color='#FB3640' /></td>
          else return <td key={i}>{props.data[key]}</td>
        }
        )}
      </>
    )
  }

  const getRowsData = () => {
    const keys = getKeys();
    return data.map((row, i) => {
      return <tr key={i}><RenderRow key={i} data={row} keys={keys} /></tr>
    })
  }

  return (
    <Wrapper>
      {data &&
        <TableWrapper>
          <thead>
            <tr>{getHeader()}</tr>
          </thead>
          <tbody>
            {getRowsData()}
          </tbody>
        </TableWrapper>
      }
    </Wrapper>
  )
}

export default Table
