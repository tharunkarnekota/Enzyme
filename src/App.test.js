//https://enzymejs.github.io/enzyme/  for complete documentation

import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test("testing h1 tag",()=>{
  const cloneApp = shallow(<App />);
  expect(cloneApp.find('h1').text()).toContain('Hello World')
})

test("testing h2 tag",()=>{
  const clone = shallow(<App />);
  expect(clone.find('h2').text()).toContain('Tharun karnekota')
})

test("testing props",()=>{
  const wrapper = shallow(<App name="tharun"/>);
  expect(wrapper.find('#welcome').text()).toBe('Welcome tharun')
})

test("testing state data",()=>{
  const cloneApp = shallow(<App name="tharun"/>);
  expect(cloneApp.find('#dataa').text()).toBe('count is 0')
})

test("testing onClick",()=>{
  const cloneApp = shallow(<App />);
  cloneApp.find('button').simulate('click');
  expect(cloneApp.find('#dataa').text()).toBe('count is 1')
})