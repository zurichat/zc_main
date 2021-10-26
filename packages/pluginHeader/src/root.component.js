import Header from './pluginHeader.component'

export default function Root(props) {
  return (
    <div>
      <Header headerConfig={props.headerConfig} />
    </div>
  )
}
