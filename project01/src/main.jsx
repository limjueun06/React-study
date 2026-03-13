
import { createRoot } from 'react-dom/client'
import './index.css'

// App.jsx 라는 스케치북을 가져와서 여기서는 App이라고 별칭으로 부를게
// import App from './App.jsx'

// 이제 AppExample 이라는 스케치북을 App이라는 별칭으로 부를게
import App from './AppExample.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
