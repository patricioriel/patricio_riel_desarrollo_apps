export const AGREGAR_ITEM = 'AGREGAR_ITEM';
export const ELIMINAR_ITEM = 'ELIMINAR_ITEM';
export const CAMBIAR_ESTADO = 'CAMBIAR_ESTADO';

export const agregarItem = (item) => {
  return {
    type: AGREGAR_ITEM,
    payload: item
  }
}

export const eliminarItem = (id) => {
  return {
    type: ELIMINAR_ITEM,
    payload: id
  }
}

export const cambiarEstado = (id) => {
  return {
    type: CAMBIAR_ESTADO,
    payload: id
  }
}