import { useLocalStorage } from '@mantine/hooks'

export function useBookmark(id: string) {
	const [saved, setSaved] = useLocalStorage<Array<string>>({
		key: 'bookmarked-articles',
		defaultValue: []
	})
	function saveArticle() {
		setSaved([...saved, id])
	}

	function removeSavedArticle() {
		setSaved(saved.filter(article => article !== id))
	}

	function handleSaveArticle() {
		saved.includes(id) ? removeSavedArticle() : saveArticle()
	}

	function isBookmarked() {
		return saved.includes(id)
	}

	return {
		bookmarks: saved,
		setBookmark: handleSaveArticle,
		isBookmarked
	}
}
