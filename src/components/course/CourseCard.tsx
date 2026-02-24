'use client'

import { Card, Button } from 'antd'

type Props = {
  title: string
  description: string
}

export default function CourseCard({ title, description }: Props) {
  return (
    <Card
      title={title}
      className="shadow-md"
      extra={<Button type="link">Enroll</Button>}
    >
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}
