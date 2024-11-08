import React, { useState, useEffect } from 'react'
import { assets } from '../../../../assets/assets'
import { FiPhone } from 'react-icons/fi';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Loader from '../../../../components/Loader/Loader';

const Community = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "Ramadan El", bio: "Lover of nature and outdoor adventures.", avatar: assets.ramadan_image, phone: "+234 123 456 7890" },
    { id: 2, name: "Moses Fasey", bio: "Passionate about arts and crafts.", avatar: assets.moses_image, phone: "+234 234 567 8901" },
    { id: 3, name: "Afolabi Yusuf", bio: "Tech enthusiast and coding ninja.", avatar: assets.afolabi_image, phone: "+234 345 678 9012" },
    { id: 4, name: "Halimat Bale", bio: "Lover of absolute quiteness.", avatar: assets.halimat, phone: "+234 456 789 0123" },
    { id: 5, name: "Sid Abdul", bio: "Lover of Cats.", avatar: assets.sid_image, phone: "+234 567 890 1234" },
    { id: 6, name: "Dev Todinmu", bio: "Passionate about Christ and loves food.", avatar: assets.todinmu_image, phone: "+234 678 901 2345" },
  ]);

  const [newPost, setNewPost] = useState("")
  const [filteredMembers, setFilteredMembers] = useState(members)
  const [postFeed, setPostFeed] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    });
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPostFeed(savedPosts);
  }, []);

  
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMembers(filtered);
  };

 
  const handlePostSubmit = (e) => {
    e.preventDefault()

    if (newPost.trim() && currentUser) {
      const newPostData = { userName: currentUser?.firstName || currentUser.email, content: newPost };
      const updatedPostFeed = [...postFeed, newPostData];
      setPostFeed(updatedPostFeed);
    
      localStorage.setItem('posts', JSON.stringify(updatedPostFeed));

      setNewPost(""); 
    }
  };

  return (
    <>
      <Loader/>
      <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Our Community</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search members"
          onChange={handleSearch}
          className="w-1/3 p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Share a Post</h2>
        <form onSubmit={handlePostSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            type="submit"
            className="bg-primary text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Post
          </button>
        </form>

        {postFeed.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Post Feed</h3>
            <ul className="space-y-4">
              {postFeed.map((post, index) => (
                <li key={index} className="p-4 bg-white rounded-md shadow-md">
                  <p className="font-semibold">{post.userName}</p>
                  <p>{post.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={member.avatar}
              alt={member.name}
              className="h-32 w-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-center mb-2">{member.name}</h2>
            <p className="text-gray-700 text-center">{member.bio}</p>
            <p className="text-primary underline flex justify-center gap-3 items-center"><FiPhone /> {member.phone}</p>
          </div>
        ))}
      </div>
    </main>
    </>
    
  );
};

export default Community;
