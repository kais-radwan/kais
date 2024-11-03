"use client"

import { IconVolume, IconVolumeOff } from "@tabler/icons-react"
import React, { useEffect, useState } from "react"

interface Props {
  src: string
}

const AudioPlayer = ({ src }: Props) => {
  const [playing, setPlaying] = useState(true)
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null)

  const toggle = () => {
    if (!player) return

    const c = !playing
    setPlaying(c)

    if (c) {
      return player.play()
    }

    player.pause()
  }

  useEffect(() => {
    if (!player) {
      const audio = new Audio(src)
      audio.volume = 0.5

      audio.play()
      setPlayer(audio)

      return () => {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [])

  return (
    <div
      className="fixed bottom-0 right-0 z-40 flex h-7 w-7 cursor-pointer items-center justify-center bg-green-400 text-black backdrop-blur"
      onClick={toggle}
    >
      {playing ? <IconVolume size={14} /> : <IconVolumeOff size={14} />}
    </div>
  )
}

export default AudioPlayer
