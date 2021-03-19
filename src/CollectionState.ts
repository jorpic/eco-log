import {useState} from "preact/hooks"


export type CollectionState<T> = {
  elements: T[]
  selected: T | null
  setSelected: (e: T) => void
}

export function useCollectionState<T>(elements: T[], e: T | null)
  : CollectionState<T>
{
  const [selected, setSelected] = useState(e)
  return {elements, selected, setSelected};
}
