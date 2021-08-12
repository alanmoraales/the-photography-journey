import { ComponentType, Component } from 'react'

type GetComponentProps<T> = T extends
  | ComponentType<infer P>
  | Component<infer P>
  ? P
  : never

export type { GetComponentProps }
