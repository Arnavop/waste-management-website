'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Calendar } from 'lucide-react'

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  replies: number;
  tags: string[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: "Tips for reducing plastic waste",
    content: "I've been trying to reduce my plastic waste and wanted to share some tips that have worked for me. What strategies have you all found effective?",
    author: "EcoWarrior",
    date: "2023-05-15",
    likes: 24,
    replies: 8,
    tags: ["Plastic", "Reduce", "Tips"]
  },
  {
    id: 2,
    title: "Local recycling center experiences",
    content: "Has anyone had experience with the new recycling center downtown? I'm curious about their processes and what they accept.",
    author: "CuriousRecycler",
    date: "2023-05-14",
    likes: 15,
    replies: 5,
    tags: ["Recycling", "Local"]
  },
  {
    id: 3,
    title: "Composting in small spaces",
    content: "I live in an apartment and want to start composting. Any advice for composting in small spaces?",
    author: "UrbanGardener",
    date: "2023-05-13",
    likes: 32,
    replies: 12,
    tags: ["Composting", "Urban"]
  }
]

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")

  const handleCreatePost = () => {
    if (newPostTitle && newPostContent) {
      const newPost: Post = {
        id: posts.length + 1,
        title: newPostTitle,
        content: newPostContent,
        author: "CurrentUser",
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        replies: 0,
        tags: []
      }
      setPosts([newPost, ...posts])
      setNewPostTitle("")
      setNewPostContent("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-green-800">EcoSort Community Forum</h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="mr-2 h-4 w-4" /> New Post
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="Post Title"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                  <Textarea
                    placeholder="Write your post here..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleCreatePost}>Create Post</Button>
              </CardFooter>
            </Card>

            <Tabs defaultValue="recent">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recent">Recent Posts</TabsTrigger>
                <TabsTrigger value="popular">Popular Posts</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="space-y-4">
                {posts.map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
              </TabsContent>
              <TabsContent value="popular" className="space-y-4">
                {[...posts].sort((a, b) => b.likes - a.likes).map((post) => (
                  <ForumPost key={post.id} post={post} />
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Forum Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Posts:</span>
                    <span>{posts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Users:</span>
                    <span>142</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Topics:</span>
                    <span>23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Recycling</Badge>
                  <Badge>Composting</Badge>
                  <Badge>Plastic</Badge>
                  <Badge>Reduce</Badge>
                  <Badge>Reuse</Badge>
                  <Badge>Green Living</Badge>
                  <Badge>Sustainability</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function ForumPost({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{post.title}</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              <MessageSquare className="mr-1 h-3 w-3" />
              {post.replies}
            </Badge>
            <Badge variant="secondary">
              <ThumbsUp className="mr-1 h-3 w-3" />
              {post.likes}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Discussion</Button>
      </CardFooter>
    </Card>
  )
}