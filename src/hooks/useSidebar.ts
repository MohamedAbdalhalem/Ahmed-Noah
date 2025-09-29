
export default function useSidebar() {
  function showSide() {
    const coverOfSidebar = document.querySelector('.sidebar') as HTMLElement | null
    const sidebar = document.querySelector('.sidebar > div') as HTMLElement | null
    document.body.style.overflow= 'hidden'
    if (coverOfSidebar && sidebar) {
      coverOfSidebar.style.visibility = 'visible';
      sidebar.style.transform = 'translateX(0%)';
    }
  }
  function hideSide() {
    const coverOfSidebar = document.querySelector('.sidebar') as HTMLElement | null
    const sidebar = document.querySelector('.sidebar > div') as HTMLElement | null
    document.body.style.overflow= 'auto'
    if (coverOfSidebar && sidebar) {
      coverOfSidebar.style.visibility = 'hidden';
      sidebar.style.transform = 'translateX(100%)';
    }
    }
    return {showSide,hideSide}
}
