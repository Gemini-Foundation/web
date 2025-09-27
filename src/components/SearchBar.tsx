type Props = {
    onSearchInput: (e: Event) => void;
    query: () => string;
    setQuery: (value: string) => void;
    placeholderText: string;
};

export default function SearchBar({ onSearchInput, query, setQuery, placeholderText }: Props) {
    return (<div class="relative">
        <svg class="absolute size-6 left-2 top-[0.45rem] stroke-neutral-400 pointer-events-none">
            <use href={`/ui.svg#search`} />
        </svg>
        <input name="search" type="text" value={query()} onInput={onSearchInput} autocomplete="off" spellcheck={false} placeholder={placeholderText} class="w-full px-10 py-1.5 rounded outline-none placeholder-neutral-400 text-black bg-black/5 hover:bg-black/10 focus:bg-black/10 border border-black/10 focus:border-black/40" />
        {query().length > 0 && (
            <button
                onClick={() => setQuery("")}
                class="absolute flex justify-center items-center h-full w-10 right-0 top-0 stroke-neutral-400 hover:stroke-neutral-600"
            >
                <svg class="size-5">
                    <use href={`/ui.svg#x`} />
                </svg>
            </button>
        )}
    </div>)
}