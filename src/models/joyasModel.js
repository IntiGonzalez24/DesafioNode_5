//MODELO CON HATEOAS
import pool from '../../db/config.js'
import format from 'pg-format'


export const getAllJoyasHateoasModel =  async()=>{
    const allJoyas = await pool.query('SELECT *  FROM inventario')
    return allJoyas.rows
}

export const getPaginatedJoyasModel = async({order_by='stock_ASC',limits=4,page=1})=>{
  const[atribute,direction] =order_by.split('_')
  const offset = (page -1) * limits

  const formatQuery = format(
    'SELECT * FROM INVENTARIO ORDER BY  %s %s LIMIT %s OFFSET %s',
    atribute,
    direction,
    limits,
    offset
  )
  const response = await pool.query(formatQuery)
  return response.rows
}

export const getJoyasFilterModel = async ({ precio_max, precio_min, categoria, metal }) => {
  const filtros = [];
  const valores = [];

  if (precio_max) {
    valores.push(precio_max);
    filtros.push(`precio <= $${valores.length}`);
  }

  if (precio_min) {
    valores.push(precio_min);
    filtros.push(`precio >= $${valores.length}`);
  }

  if (categoria) {
    valores.push(categoria);
    filtros.push(`categoria = $${valores.length}`);
  }

  if (metal) {
    valores.push(metal);
    filtros.push(`metal = $${valores.length}`);
  }

  let consulta = 'SELECT * FROM INVENTARIO';

  if (filtros.length > 0) {
    consulta += ' WHERE ' + filtros.join(' AND ');
  }

  const result = await pool.query(consulta, valores);
  return result.rows;
};