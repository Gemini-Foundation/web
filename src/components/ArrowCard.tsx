import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a href={`/${entry.collection}/${entry.slug}`} class="group p-4 gap-3 flex items-center border rounded-lg transition-colors duration-300 ease-in-out
      bg-light-bg-secondary hover:bg-light-bg-accent border-light-border
      dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-accent dark:border-dark-border
      hover:shadow-lg">
      <div class="w-full blend
        text-light-text-primary group-hover:text-light-primary 
        dark:text-dark-text-primary dark:group-hover:text-dark-primary">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border
              border-light-border text-light-text-secondary
              dark:border-dark-border dark:text-dark-text-secondary">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          }
          <div class="text-sm uppercase text-light-secondary dark:text-dark-secondary font-medium">
            {formatDate(entry.data.date)}
          </div>
        </div>
        <div class="font-semibold mt-3 line-clamp-2
          text-light-text-primary dark:text-dark-text-primary">
          {entry.data.title}
        </div>

        <div class="text-sm line-clamp-2 text-light-text-secondary dark:text-dark-text-secondary">
          {entry.data.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-2 rounded
              bg-light-bg-accent text-light-text-muted
              dark:bg-dark-bg-accent dark:text-dark-text-muted">
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" 
        class="stroke-light-text-secondary group-hover:stroke-light-primary 
               dark:stroke-dark-text-secondary dark:group-hover:stroke-dark-primary
               transition-all duration-300 ease-in-out">
        <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
      </svg>
    </a>
  )
}