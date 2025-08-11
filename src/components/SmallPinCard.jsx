import React from 'react'

const SmallPinCard = () => {
    const posts = [
        {
            id: 1,
            title: 'Card Title 1',
            author: 'Author 1',
            image: 'https://images.unsplash.com/photo-1752805936253-7b8607697ab0?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            title: 'Card Title 2',
            author: 'Author 2',
            image: 'https://images.unsplash.com/photo-1752833102320-485bb8936b2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            title: 'Card Title 3',
            author: 'Author 3',
            image: 'https://images.unsplash.com/photo-1752774713655-10e8fd7c50df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]
    return (
        <div>
            <main className="container mx-auto mt-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* <!-- Example Card --> */}

                    {posts && posts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={post.image} alt="Card Image" className="w-full h-96 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                                <div className="flex items-center text-gray-600 text-sm">
                                    {/* <img src="https://via.placeholder.com/30" alt="Author Avatar" className="w-6 h-6 rounded-full mr-2" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </main>
        </div>
    )
}

export default SmallPinCard
