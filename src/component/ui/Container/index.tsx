import s from './Container.module.scss'

export default function Container(props: ContainerProps) {
  return (
    <div className={`${s.container} ${props.block ? s['container_' + props.block] : ''}`}>
      {props.children}
    </div>
  )
}

type ContainerProps = {
  block?: 'top' | 'news' | 'facts' | 'footer'
  children?: React.ReactNode | React.ReactNode[]
}
