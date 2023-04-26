import { useLocalStorage } from '@mantine/hooks'

export function useBookmark(id: string, key: string) {
	const [bookmarks, setBookmarks] = useLocalStorage<Array<string>>({
		key,
		defaultValue: []
	})
	function saveArticle() {
		setBookmarks([...bookmarks, id])
	}

	function removeSavedArticle() {
		setBookmarks(bookmarks.filter(article => article !== id))
	}

	function handleSaveArticle() {
		bookmarks.includes(id) ? removeSavedArticle() : saveArticle()
	}

	return {
		bookmarks,
		setBookmark: handleSaveArticle,
		isBookmarked: bookmarks.includes(id)
	}
}
