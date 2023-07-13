import { useFrame } from '@react-three/fiber'

const c = [
  [-60, 7, -20],
  [-42, 10, 3],
  [-5, 35, 5]
]

const t = [
  [20, 6, -35],
  [-30, 7, -2],
  [40, 35, 40]
]

export function UpdateCamera2({ target }) {
  const duration = 1.5 // Duration of the lerp animation in seconds
  let time = 0 // Elapsed time during the lerp animation

  useFrame((state, delta) => {
    if (target === 0) {
      const time = Date.now() * 0.002 + 20
      const k = 0.1
      const f = 100

      state.camera.position.x = f * Math.sin(time * k)
      state.camera.position.y = 50
      state.camera.position.z = f * Math.cos(time * k)

      state.camera.lookAt(0, 0, 0)
      state.camera.updateProjectionMatrix()
    } else {
      const cameraStart = state.camera.position
      const cameraEnd = c[target]
      const targetStart = target === 1 ? [0, 0, 0] : t[target - 1]
      const targetEnd = t[target]

      if (time <= duration) {
        // Perform lerp animation
        const t = time / duration
        state.camera.position.x = lerp(cameraStart[0], cameraEnd[0], t)
        state.camera.position.y = lerp(cameraStart[1], cameraEnd[1], t)
        state.camera.position.z = lerp(cameraStart[2], cameraEnd[2], t)

        state.camera.lookAt(
          lerp(targetStart[0], targetEnd[0], t),
          lerp(targetStart[1], targetEnd[1], t),
          lerp(targetStart[2], targetEnd[2], t)
        )

        time += delta
      } else {
        // Animation completed, set the final position and rotation
        state.camera.position.x = c[target - 1][0]
        state.camera.position.y = c[target - 1][1]
        state.camera.position.z = c[target - 1][2]

        state.camera.lookAt(
          t[target - 1][0],
          t[target - 1][1],
          t[target - 1][2]
        )
      }
    }
  })

  return null
}

// Helper function for linear interpolation (lerp)
function lerp(start, end, t) {
  return (1 - t) * start + t * end
}
