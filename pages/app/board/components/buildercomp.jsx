import { BuilderComponent, builder } from '@builder.io/react'

  builder.init('325e4d25c6cf42398c11bd56ab53d736')
    
  export const MyComponent = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null)
  
    useEffect(() => { 
      builder.get('landing-page', { url: location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])
  
    return <BuilderComponent model="landing-page" content={builderContentJson} />
  }

  