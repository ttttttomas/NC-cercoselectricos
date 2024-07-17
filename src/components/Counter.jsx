import CountUp from 'react-countup';
import { useCountup } from use-count-up

export default function Counter({end, duration}) {
    const { value } = useCountUp({
        isCounting: true,
        end: 1320,
        duration: 3.2,
      })

      return value
}