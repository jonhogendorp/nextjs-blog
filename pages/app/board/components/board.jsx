/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ERLWFbPywbo
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

const Component = () => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>To Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Card>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-gray-500">Design new logo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <h4 className="text-sm font-semibold">Alice Murray</h4>
                      <p className="text-xs text-gray-500">Update website</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Card>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <h4 className="text-sm font-semibold">Robert Paulson</h4>
                      <p className="text-xs text-gray-500">Create ad campaign</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Card>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <h4 className="text-sm font-semibold">Lisa Grant</h4>
                      <p className="text-xs text-gray-500">Write blog post</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Card>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <h4 className="text-sm font-semibold">Jack Smith</h4>
                      <p className="text-xs text-gray-500">Finalize report</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Component;