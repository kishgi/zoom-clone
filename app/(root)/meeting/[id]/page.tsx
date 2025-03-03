import React from 'react'

const meeting = ({ params }: {params: {id: string}}) => {
  return (
    <div>
      Meeting room: #{params.id}
    </div>
  )
}

export default meeting
