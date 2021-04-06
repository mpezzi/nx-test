
import { TestComponent } from './test.component';

export default {
  title: 'TestComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TestComponent,
  props: {
  }
})