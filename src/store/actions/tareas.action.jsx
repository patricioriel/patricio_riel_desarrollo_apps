export const AGREGAR_ITEM = 'AGREGAR_ITEM';
export const ELIMINAR_ITEM = 'ELIMINAR_ITEM';
export const CAMBIAR_ESTADO = 'CAMBIAR_ESTADO';
export const SELECT_ITEM = "SELECT_ITEM";

export const agregarItem = (item) => {
  return {
    type: AGREGAR_ITEM,
    payload: item
  }
}

export const selectItem = (item) => {
  return {
    type: SELECT_ITEM,
    payload: item
  }
}

export const eliminarItem = (item) => {
  return {
    type: ELIMINAR_ITEM,
    payload: item
  }
}

export const cambiarEstado = (item) => {
  return {
    type: CAMBIAR_ESTADO,
    payload: item
  }
}