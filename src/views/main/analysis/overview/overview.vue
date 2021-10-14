<template>
  <div class="overview">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">关于</span>
        </div>
      </template>
      <div class="about item">
        Vue3Admin是基于Vue3,Vuex,VueRouter,Vite,ElementPlus,TypeScript,Echarts等后台系统解决方案
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">技术栈</span>
        </div>
      </template>
      <div class="about item">
        <li class="about-item">
          开发工具: <a href="javascript:;">Visual studio Code</a>
        </li>
        <li class="about-item">
          编程语言: <a href="javascript:;">TypeScript 4.0 + JavaScript</a>
        </li>
        <li class="about-item">
          构建工具: <a href="javascript:;">Vite 2.x / Webpack 5.x</a>
        </li>
        <li class="about-item">前端框架: <a href="javascript:;">Vue 3.x</a></li>
        <li class="about-item">
          路由工具: <a href="javascript:;">Vue Router 4.x</a>
        </li>
        <li class="about-item">
          状态管理: <a href="javascript:;">Vuex 4.x</a>
        </li>
        <li class="about-item">
          Ui框架: <a href="javascript:;">Element Plus</a>
        </li>
        <li class="about-item">
          可视化: <a href="javascript:;">Echats 5.x</a>
        </li>
        <li class="about-item">
          富文本: <a href="javascript:;">WangEdltor</a>
        </li>
        <li class="about-item">
          工具库: <a href="javascript:;">dayjs+@vueuse/core+countup.js</a>
        </li>
        <li class="about-item">数据模拟: <a href="javascript:;">mock.js</a></li>
        <li class="about-item">css预编译: <a href="javascript:;">Less</a></li>
        <li class="about-item">Http工具: <a href="javascript:;">Axios</a></li>
        <li class="about-item">
          GitHook工具: <a href="javascript:;">husky</a>
        </li>
        <li class="about-item">
          代码规范: <a href="javascript:;">EdltorConfig+Eslint+Prettier</a>
        </li>
        <li class="about-item">
          自动部署: <a href="javascript:;">Centos+Jenkins+Nginx</a>
        </li>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">项目规范</span>
        </div>
      </template>
      <div class="about item">
        <el-descriptions
          class="margin-top"
          title="文件命名规范"
          :column="1"
          size="medium"
          border
        >
          <el-descriptions-item>
            <template #label>文件夹</template>
            <el-tag>统一小写,多个单词使用-分割</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>文件(.ts .vue .s.ts .json)</template>
            <el-tag>统一小写,多个单词使用-分割</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="about item">
        <el-descriptions
          class="margin-top"
          title="编写组件规范"
          :column="1"
          size="medium"
          border
        >
          <el-descriptions-item label-class-name="ac">
            <template #label>组件文件</template>
            <el-tag>统一小写,多个单词使用-分割</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件的目录结构</template>
            <el-tag
              >例如 buttion 组件:button/src/index.vue
              统一在button/index.ts中导出</el-tag
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件导包顺序</template>
            <el-tag
              >导vue技术栈的包,导第三方工具函数,导本地组件,导本地工具函数</el-tag
            >
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件的名称</template>
            <el-tag>统一大写开头,驼峰命名</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件属性顺序</template>
            <el-tag>naem,components,pops,emits,setup....</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>template标签</template>
            <el-tag>小写加-如(case-panel)</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>template标签属性顺序</template>
            <el-tag>v-if,v-for,ref,class,style,...,事件</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件的props</template>
            <el-tag>小写开头,驼峰命名,必须谢类型默认值</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>组件的样式</template>
            <el-tag
              >作用域:scoped,lang="less/scss",类名统一小写,多个单词使用-分开</el-tag
            >
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">相关依赖</span>
        </div>
      </template>
      <div class="about item">
        <div class="about item">
          <el-descriptions
            class="margin-top"
            title="生产环境依赖"
            :column="1"
            size="medium"
            border
          >
            <el-descriptions-item
              v-for="(value, key) in dependencies"
              :key="value"
            >
              <template #label> {{ key }} </template>
              <el-tag>{{ value }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="about item">
          <el-descriptions
            class="margin-top"
            title="开发环境依赖"
            :column="1"
            size="medium"
            border
          >
            <el-descriptions-item
              v-for="(value, key) in devDependencies"
              :key="value"
            >
              <template #label> {{ key }} </template>
              <el-tag>{{ value }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="title">项目结构</span>
        </div>
        <hycode language="bash" :code="tree"></hycode>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import packages from '../../../../../package.json'
import Hycode from '@/base-ui/code'
import { tree } from './config/tree'

export default defineComponent({
  name: 'overview',
  components: {
    Hycode
  },
  setup() {
    const { dependencies, devDependencies } = packages
    return {
      dependencies,
      devDependencies,
      tree
    }
  }
})
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}
.about {
  font-size: 15px;
  font-weight: 600;
}
.about-item {
  margin: 15px 0;
}
.about-item a {
  text-decoration: none;
  margin-left: 5px;
}
.title {
  font-size: 16px;
  font-weight: 600;
}
.item {
  margin-bottom: 25px;
}
</style>
