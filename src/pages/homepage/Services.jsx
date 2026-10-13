import ScrollExpand from '../../components/ui/ScrollExpand'

function Services() {
  return (
    <div>
       <ScrollExpand
        src="https://images.unsplash.com/photo-1655841439659-0afc60676b70?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3QlMjBmbG93fGVufDB8fDB8fHww"
        alt="Product hero"
        title="Built to scale"
        scrollHint="Keep Scrolling"
        useWindowScroll
      >
        <h2 className='text-white text-8xl mb-12'>Our Services</h2>
        <p className='text-white text-4xl'>
          Advertising  |  Social Media Marketing  |  Design
        </p>
      </ScrollExpand>
    </div>
  )
}

export default Services