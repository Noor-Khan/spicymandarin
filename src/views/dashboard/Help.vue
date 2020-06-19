<template>
  <div id="Help">
    <Header title="frequently asked questions" />
    <el-row>
      <el-col :lg="24">
        <div class="faq">
          <h3>List of faqs:</h3>
          <el-collapse accordion>
            <el-collapse-item name="1">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>
                Consistency
              </template>
              <div>
                Consistent with real life: in line with the process and logic of
                real life, and comply with languages and habits that the users
                are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent,
                such as: design style, icons and texts, position of elements,
                etc.
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>
                Feedback
              </template>
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or
                rearranging elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>
                Efficiency
              </template>
              <div>
                Simplify the process: keep operating process simple and
                intuitive;
              </div>
              <div>
                Definite and clear: enunciate your intentions clearly so that
                the users can quickly understand and make decisions;
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which
                helps the users to identify and frees them from memorizing and
                recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template slot="title">
                <i class="header-icon el-icon-info"></i>
                Controllability
              </template>
              <div>
                Decision making: giving advices about operations is acceptable,
                but do not make decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "../../components/dashboard/Header";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
#Help {
  .faq {
    text-align: left;
    margin: 2rem 1rem;
    .el-collapse {
      .el-collapse-item {
        margin: 5px 0;
        .el-collapse-item__header {
          padding: 5px 10px;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 18px;
          i {
            margin-right: 10px;
          }
        }
        .el-collapse-item__wrap {
          padding: 5px 20px;
        }
      }
    }
  }
}
</style>
