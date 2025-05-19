import { Routes, Route } from 'react-router-dom'
import School from './Pages/School/School'
import Student from './Pages/Student/Student'
import PageNotFound from './Pages/PageNotFound/PageNotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<School />} />
      <Route path="/student/:id" element={<Student />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
