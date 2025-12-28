import axios from "axios"
import { useState, useEffect } from "react"
import { RepoCard } from "../../components/primitives"
import { cn } from "../../utils"

const DashboardPage = () => {

  const [repos, setRepos] = useState([])

  useEffect(() => {

    (async () => {
      try {
        const a = await axios.get('https://api.github.com/users/codingjury/repos')
        console.log(a.data);
        setRepos(a.data)
      } catch (error) {

      }
    })()

  }, [])


  return (
    <div className={cn(
      "grid gap-6 p-8",
      "grid-cols-1",
      "md:grid-cols-3",
      "lg:grid-cols-4",
      "items-start" // Prevents cards from stretching to match row height
    )}>
      {repos.map((repo: any) => (
        repo.homepage && <RepoCard key={repo.id} {...repo} />
      ))}
    </div>
  )
}

export default DashboardPage