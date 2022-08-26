export default function ScrollToTopPage() {
  function scroll () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='scroll-top'>
      <img className='icon-top' src="../arrowtop.png" alt="scrolltopage" height="18px" onClick={scroll}></img>
    </div>
  )
}