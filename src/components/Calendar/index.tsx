import { CaretLeft, CaretRight } from 'phosphor-react'
import { Container } from '../../pages/home/styles'
import { getWeekDays } from '../../utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const weekDays = getWeekDays({ short: true })

  return (
    <Container>
      <CalendarHeader>
        <CalendarTitle>
          Março <span>2023</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {weekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
            <td>
              <CalendarDay>4</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </Container>
  )
}
